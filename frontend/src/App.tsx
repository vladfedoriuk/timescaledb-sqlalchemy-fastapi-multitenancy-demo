import { Flex } from "@tremor/react";
import { IdTokenInfo } from "./IdTokenInfo";

function App() {
  return (
    <section className="container mx-auto">
      <Flex>
        <Flex className="m-auto">
          <IdTokenInfo />
        </Flex>
      </Flex>
    </section>
  );
}

export default App;
