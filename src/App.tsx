import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { BasePageLayout } from "./shared/pages/BasePageLayout";
import { UserProvider } from "./core/contexts/UserContext";
import { FilterProvider } from "./core/contexts/FilterContext";
import { HelloMessageProps } from "./core/constants/messages";
import { useHelloEffect } from "./core/hooks/useHelloEffect";
import { PageRoutes } from "./core/routes/PageRoutes";

const App = ({ propsMessage }: HelloMessageProps) => {
  useHelloEffect({ propsMessage, fun: App });

  return (
    <BasePageLayout propsMessage={propsMessage}>
      <BrowserRouter>
        <UserProvider propsMessage={propsMessage}>
          <FilterProvider propsMessage={propsMessage}>
            <PageRoutes propsMessage={propsMessage} />
          </FilterProvider>
        </UserProvider>
      </BrowserRouter>
    </BasePageLayout>
  );
};

export default App;
