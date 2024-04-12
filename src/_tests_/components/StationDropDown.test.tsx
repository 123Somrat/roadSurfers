import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import StationDropDown from "../../Components/StationDropDown/StationDropDown";

const mockStations = [
  { id: "1", name: "Station1" },
  { id: "2", name: "Station2" },
  { id: "3", name: "Station3" },
];

describe("StationDropDown", () => {
  it("renders a dropdown with the provided stations", () => {
    render(
      <StationDropDown
        stations={mockStations}
        handleStation={jest.fn()}
        station=""
      />
    );
    const text = screen.getByText("Choose station");
    // expect(screen.getByText("Choose station")).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  it("displays the selected station name", () => {
    render(
      <StationDropDown
        stations={mockStations}
        handleStation={jest.fn()}
        station="Station1"
      />
    );
    expect(screen.getByText("Station1")).toBeInTheDocument();
  });

  it("show station name when a station is seleted", () => {
    const handleStation = jest.fn();
    render(
      <StationDropDown
        stations={mockStations}
        handleStation={handleStation}
        station=""
      />
    );
    fireEvent.click(screen.getByText("Choose station"));
    fireEvent.click(screen.getByText("Station1"));
    expect(handleStation).toHaveBeenCalledWith("Station1");
  });

  it("show station name when a station is seleted", () => {
    const handleStation = jest.fn();
    render(
      <StationDropDown
        stations={mockStations}
        handleStation={handleStation}
        station="Station1"
      />
    );
    const text = screen.getByText("Station1");
    expect(text).toBeInTheDocument();
  });

  it("clicking on a station name calls the handleStation function", () => {
    const handleStation = jest.fn();
    render(
      <StationDropDown
        stations={mockStations}
        handleStation={handleStation}
        station=""
      />
    );
    fireEvent.click(screen.getByText("Choose station"));
    fireEvent.click(screen.getByText("Station1"));
    expect(handleStation).toHaveBeenCalledWith("Station1");
  });
});
