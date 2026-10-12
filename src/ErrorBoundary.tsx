import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in RempliTrans application:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0F172A',
          color: '#F8FAFC',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '24px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: '480px', width: '100%' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>
              RempliTrans
            </h1>
            <p style={{ fontSize: '14px', color: '#94A3B8', marginBottom: '20px' }}>
              Une erreur inattendue est survenue lors de l’affichage. Veuillez actualiser la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#1D4ED8',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
              }}
            >
              Recharger la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
