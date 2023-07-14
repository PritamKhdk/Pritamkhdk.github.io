import Router from "./Router"
import Index from "./Hooks/index";


const App = () => {
  return (
    <div>
      <Index>
        <Router />
      </Index>
    </div>
  );
};

export default App;
