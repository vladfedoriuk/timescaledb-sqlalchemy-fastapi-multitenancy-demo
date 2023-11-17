import { Flex } from "@tremor/react";
import { IdTokenInfo } from "./IdTokenInfo";

function App() {
  return (
    <Flex>
      <Flex className="m-auto">
        <IdTokenInfo />
      </Flex>
    </Flex>
  );
}

export default App;
