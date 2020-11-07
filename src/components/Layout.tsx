
import React from 'react'

function layout() {

    return function(WrappedComponent: React.FC<any>) {
      class renderer extends React.Component<any> {

        componentDidMount() {
            if(!this.props.notify) {
                this.props.state.addListener(this.handleChange.bind(this))
            }
        }

        handleChange() {
            this.forceUpdate()
        }
        
        render() {
          return <WrappedComponent {...this.props} />;
        }
      }
  
      return renderer;
    }
  }

  export default layout