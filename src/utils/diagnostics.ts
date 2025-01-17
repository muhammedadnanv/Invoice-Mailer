import { toast } from "@/components/ui/use-toast";

interface DiagnosticResult {
  status: 'success' | 'warning' | 'error';
  message: string;
  timestamp: string;
  details?: Record<string, any>;
}

class DiagnosticService {
  private static instance: DiagnosticService;
  private lastCheck: Date = new Date();
  private checkInterval: number = 30000; // 30 seconds

  private constructor() {
    this.initializeHealthCheck();
  }

  public static getInstance(): DiagnosticService {
    if (!DiagnosticService.instance) {
      DiagnosticService.instance = new DiagnosticService();
    }
    return DiagnosticService.instance;
  }

  private async initializeHealthCheck() {
    try {
      await this.performHealthCheck();
      setInterval(() => this.performHealthCheck(), this.checkInterval);
    } catch (error) {
      console.error('Failed to initialize health check:', error);
    }
  }

  private async performHealthCheck(): Promise<DiagnosticResult> {
    try {
      const startTime = performance.now();
      
      // Check API health
      const { data, error } = await supabase.functions.invoke('health', {
        method: 'GET',
      });

      if (error) throw error;

      const endTime = performance.now();
      const responseTime = endTime - startTime;

      const result: DiagnosticResult = {
        status: responseTime < 1000 ? 'success' : 'warning',
        message: `Health check completed. Response time: ${Math.round(responseTime)}ms`,
        timestamp: new Date().toISOString(),
        details: {
          apiStatus: data.status,
          responseTime,
          apiVersion: data.version
        }
      };

      if (result.status === 'warning') {
        toast({
          title: "Performance Warning",
          description: "System is experiencing slower than normal response times.",
          variant: "destructive",
        });
      }

      return result;
    } catch (error) {
      const errorResult: DiagnosticResult = {
        status: 'error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date().toISOString(),
        details: { error }
      };

      toast({
        title: "System Error",
        description: "Unable to connect to the server. Please try again later.",
        variant: "destructive",
      });

      return errorResult;
    }
  }

  public async runDiagnostics(): Promise<DiagnosticResult> {
    return this.performHealthCheck();
  }
}

export const diagnosticService = DiagnosticService.getInstance();