import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { BrowserRouter } from 'react-router-dom';
import RouterPage from './router/router';
import LayoutPage from './layout/layoutpage';
const queryClient = new QueryClient()

function App() {
  return <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <LayoutPage>
        <RouterPage  />
      </LayoutPage>
    </BrowserRouter>
  </QueryClientProvider>;
}

export default App;
