"use client";
import { useState } from "react";
const taps = ["New Arrival", "Bestseller", "Featured Products"];
export default function useDiscoverProducts() {
  const [activeTab, setActiveTab] = useState("New Arrival");
  return {
    activeTab,
    setActiveTab,
    taps,
  };
}
