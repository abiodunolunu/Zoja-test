import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import organizationApi from "@/services/organizationApi";
import AppRoutesEnum from "@/types/enums/RouteEnums";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function UpdateOrganization() {
  const [isLoading, setIsLoading] = useState(false);
  const [organizationData, setOrganizationData] = useState({
    id: "6",
    name: "Fanatic",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    country: "USA",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const value = e.target.value;

    setOrganizationData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { data } = await organizationApi.updateOrganization({
      id: organizationData.id,
      name: organizationData.name,
      street: organizationData.street,
      city: organizationData.city,
      state: organizationData.state,
      country: organizationData.country,
    });
    if (data.success) {
      alert("Organization updated successfully");
    }
    setIsLoading(false);
  };

  return (
    <div className="grid gap-5 justify-center">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <TextInput
            labelText="Name"
            className="col-span-2"
            name="name"
            value={organizationData.name}
            onChange={handleChange}
            required
          />
          <TextInput
            labelText="Street"
            name="street"
            value={organizationData.street}
            onChange={handleChange}
            required
          />
          <TextInput
            labelText="City"
            name="city"
            value={organizationData.city}
            onChange={handleChange}
            required
          />
          <TextInput
            labelText="State"
            name="state"
            value={organizationData.state}
            onChange={handleChange}
            required
          />
          <TextInput
            labelText="Country"
            name="country"
            value={organizationData.country}
            onChange={handleChange}
            required
          />

          <Button
            text="Submit"
            className="mt-4 col-span-2"
            disabled={isLoading}
          />
        </div>
      </form>

      <Link
        className="text-sm text-blue-600 text-center"
        to={AppRoutesEnum.HOME}
      >
        Go Home
      </Link>
    </div>
  );
}
