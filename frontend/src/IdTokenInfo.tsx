import { useEffect, useState } from "react";
import { useCurrentUser } from "./firebase-lib/hooks";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Bold,
  Callout,
  Card,
  Subtitle,
  Text,
} from "@tremor/react";
import { ExclamationIcon } from "@heroicons/react/solid";

export const IdTokenInfo = () => {
  const { currentUser } = useCurrentUser();
  const [idToken, setIdToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (currentUser) {
      currentUser.getIdToken(true).then(setIdToken).catch(setError);
    }
  }, [currentUser]);
  if (error) {
    return (
      <Card className="max-w-lg">
        <Text>Failed to get ID token</Text>
        <Callout
          className="h-12 mt-4"
          title="Critical speed limit reached"
          icon={ExclamationIcon}
          color="rose"
        >
          {error}
        </Callout>
      </Card>
    );
  }
  if (idToken === null) {
    return <div>Loading...</div>;
  }
  return (
    <Card className="max-w-lg space-y-4">
      <Text>ID token</Text>
      <Subtitle className="mb-4">
        Copy this token to use in the{" "}
        <Bold className="text-sm">Authorization</Bold> header of the{" "}
        <Bold className="text-sm">Sensor Logger app</Bold>
      </Subtitle>
      <Accordion>
        <AccordionHeader>Access Token</AccordionHeader>
        <AccordionBody>
          <Text className="break-all text-xs">{idToken}</Text>
        </AccordionBody>
      </Accordion>
    </Card>
  );
};
