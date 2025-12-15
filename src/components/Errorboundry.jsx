//this is the error boundry component which will be used to handle the error at component level
//this is a fallback component which will be shown when the error is caught by the error boundry
//this component will be used in the root layout of the app

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
    componentDidCatch(error, info) {
      // Log the error to an error reporting service
      console.error(error, info);
    }
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return(
            <>
            </>
        )
      }
      return this.props.children;
    }
  }

