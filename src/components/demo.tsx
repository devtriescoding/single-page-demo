import React, { useState } from "react";
import {
  Heart,
  Share,
  Star,
  CalendarIcon,
  Users,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AirbnbListingPage = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleGuestChange = (type, operation) => {
    setGuests((prev) => ({
      ...prev,
      [type]:
        operation === "add" ? prev[type] + 1 : Math.max(0, prev[type] - 1),
    }));
  };

  const totalGuests = guests.adults + guests.children + guests.infants;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... (previous code for title, images, etc.) ... */}

      <div className="flex flex-col lg:flex-row justify-between mb-8 gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">
            Entire home in Copalis Crossing, Washington, United States
          </h2>
          <p className="text-muted-foreground mb-6">
            6 guests · 1 bedroom · 3 beds · 1 bathroom
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/50/50"
                alt="Guest favourite"
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold">Guest favourite</h3>
                <p className="text-sm text-muted-foreground">
                  One of the most loved homes on Airbnb, according to guests
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/50/50"
                alt="Host"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Hosted by Nick</h3>
                <p className="text-sm text-muted-foreground">
                  Superhost · 2 years hosting
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/50/50"
                alt="Self check-in"
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold">Self check-in</h3>
                <p className="text-sm text-muted-foreground">
                  Check yourself in with the smartlock.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/50/50"
                alt="Superhost"
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold">Nick is a Superhost</h3>
                <p className="text-sm text-muted-foreground">
                  Superhosts are experienced, highly rated Hosts.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="/api/placeholder/50/50"
                alt="Location"
                className="w-8 h-8"
              />
              <div>
                <h3 className="font-semibold">Unbeatable location</h3>
                <p className="text-sm text-muted-foreground">
                  100% of guests in the past year gave this location a 5-star
                  rating.
                </p>
              </div>
            </div>
          </div>

          {/* ... (rest of the content) ... */}
        </div>

        <div className="lg:w-1/3">
          <div className="sticky top-4">
            <Card className="w-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl md:text-2xl font-bold">
                    Add dates for prices
                  </span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="font-semibold">4.94</span>
                    <span className="text-muted-foreground ml-1">
                      (99 reviews)
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="col-span-1">
                    <DatePicker
                      selected={checkInDate}
                      onChange={(date) => setCheckInDate(date)}
                      selectsStart
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      placeholderText="Check-in"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="col-span-1">
                    <DatePicker
                      selected={checkOutDate}
                      onChange={(date) => setCheckOutDate(date)}
                      selectsEnd
                      startDate={checkInDate}
                      endDate={checkOutDate}
                      minDate={checkInDate}
                      placeholderText="Checkout"
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
                <div className="mb-4 relative">
                  <Button
                    onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                    className="w-full justify-between"
                  >
                    <span>
                      {totalGuests} guest{totalGuests !== 1 ? "s" : ""}
                    </span>
                    <Users className="w-4 h-4" />
                  </Button>
                  {isGuestDropdownOpen && (
                    <Card className="absolute top-full left-0 right-0 mt-2 z-10">
                      <CardContent className="p-4">
                        {Object.entries(guests).map(([type, count]) => (
                          <div
                            key={type}
                            className="flex justify-between items-center mb-2"
                          >
                            <div>
                              <h4 className="font-semibold capitalize">
                                {type}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {type === "adults"
                                  ? "Age 13+"
                                  : type === "children"
                                  ? "Ages 2-12"
                                  : type === "infants"
                                  ? "Under 2"
                                  : "Bringing a service animal?"}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                  handleGuestChange(type, "subtract")
                                }
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span>{count}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleGuestChange(type, "add")}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                        <p className="text-sm text-muted-foreground mt-4">
                          This place has a maximum of 6 guests, not including
                          infants. Pets aren't allowed.
                        </p>
                        <Button
                          className="mt-4 w-full"
                          onClick={() => setIsGuestDropdownOpen(false)}
                        >
                          Close
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
                <Button className="w-full">Check availability</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirbnbListingPage;
