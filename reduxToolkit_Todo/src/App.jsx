import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen w-screen flex items-center justify-center bg-gray-900">
        <div className="w-full max-w-2xl bg-[#0c1022] p-6 rounded-lg shadow-lg">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
