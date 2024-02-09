import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function WeatherCard(props: {
  header?: string;
  body?: string;
  footer?: string;
  className?: string;
}) {
  return (
    <div className={`${props.className}`}>
      <Card>
        <CardHeader>
          <p>{props.header}</p>
        </CardHeader>
        <CardBody>
          {" "}
          <p>{props.body}</p>
        </CardBody>
        <CardFooter>
          <p>{props.footer}</p>
        </CardFooter>
      </Card>
    </div>
  );
}
