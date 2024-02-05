import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function WeatherCard(props: {
  header?: string;
  body?: string;
  footer?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <p>{props.header}</p>
      </CardHeader>
      <CardBody>
        {" "}
        <p>{props.body}°F</p>
      </CardBody>
      <CardFooter>
        <p>{props.footer}</p>
      </CardFooter>
    </Card>
  );
}
