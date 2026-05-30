import { getDeliveryDate } from "../hooks/use-chekout";

export default function Shipping() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Shipping Method</h3>
      <div className="flex flex-col gap-4 pb-5">

        <label className="flex items-center justify-between gap-4 w-full border p-4 rounded-xl bg-accent cursor-pointer">
          <div className="flex sm:flex-row flex-col sm:items-center items-start gap-4">
            <input
              type="radio"
              defaultChecked
              name="delivery"
              value="free"
              className="accent-black"
            />
            <p>Free</p>
            <span>Regular shipment</span>
          </div>

          <div>
            {getDeliveryDate(10)}
          </div>
        </label>

        <label className="flex items-center justify-between gap-4 w-full border p-4 rounded-xl bg-accent cursor-pointer">
          <div className="flex sm:flex-row flex-col sm:items-center items-start gap-4">
            <input
              type="radio"
              name="delivery"
              value="express"
              className="accent-black"
            />
            <span>$8.50</span>
            <span>Get your delivery as soon as possible</span>
          </div>

          <div>
            {getDeliveryDate(5)}
          </div>
        </label>

        <label className="flex items-center justify-between gap-4 w-full border p-4 rounded-xl bg-accent cursor-pointer">
          <div className="flex sm:flex-row flex-col sm:items-center items-start gap-4">
            <input
              type="radio"
              name="delivery"
              value="schedule"
              className="accent-black"
            />
            <p>Schedule</p>
            <span>Pick a date when you want to get your delivery</span>
          </div>
        </label>

      </div>
    </div>
  )
}