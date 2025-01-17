import { useState, useEffect } from 'react';
import { diagnosticService } from '@/utils/diagnostics';

export function useDiagnostics() {
  const [isHealthy, setIsHealthy] = useState(true);
  const [lastCheck, setLastCheck] = useState<Date>(new Date());

  useEffect(() => {
    const checkHealth = async () => {
      const result = await diagnosticService.runDiagnostics();
      setIsHealthy(result.status === 'success');
      setLastCheck(new Date());
    };

    // Initial check
    checkHealth();

    // Set up periodic checks
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return {
    isHealthy,
    lastCheck,
    runDiagnostics: diagnosticService.runDiagnostics
  };
}