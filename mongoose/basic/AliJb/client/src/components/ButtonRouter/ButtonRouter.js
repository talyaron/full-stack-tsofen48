import { withRouter } from 'react-router-dom'
// this also works with react-router-native

const ButtonRouter = withRouter(({ props,history }) => (
  <button
    type='button'
    onClick={() => { history.push('/Checkout') }}
  >
    Click Me!
  </button>
))

export default ButtonRouter