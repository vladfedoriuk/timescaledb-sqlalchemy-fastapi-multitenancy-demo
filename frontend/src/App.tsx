import { Flex } from "@tremor/react";
import { AccessTokenInfo } from "./AccessTokenInfo";

function App() {
  return (
    <section className="container mx-auto">
      <Flex>
        <Flex className="m-auto">
          <AccessTokenInfo />
        </Flex>
      </Flex>
    </section>
  );
}

export default App;
