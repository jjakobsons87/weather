import Link from "next/link";
import NavLinks from "./navlinks";
import { OneCallWeather } from "@/types/weather";
import SearchComponent from "@/app/components/search";

export default function SideNav(props: {
  city: string;
  state: string;
  data: OneCallWeather | "";
  setCity: (value: string) => void;
  setState: (value: string) => void;
  setData: React.Dispatch<React.SetStateAction<OneCallWeather | "">>;
}) {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <SearchComponent
          city={props.city}
          state={props.state}
          data={props.data}
          setCity={props.setCity}
          setState={props.setState}
          setData={props.setData}
        />
      </div>
    </div>
  );
}
