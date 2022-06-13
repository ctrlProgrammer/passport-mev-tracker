import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main";

interface AppComponentProps {}

interface AppComponentState {}

export class App extends React.Component<AppComponentProps, AppComponentState> {
  constructor(props: AppComponentProps) {
    super(props);

    this.state = {
      contractLoading: false,
    };
  }

  async componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <MainPage></MainPage>
      </BrowserRouter>
    );
  }
}

export default App;
