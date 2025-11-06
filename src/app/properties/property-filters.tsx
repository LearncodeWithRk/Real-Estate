"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("filter", value);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-center">
      <Tabs value={currentFilter} onValueChange={handleFilterChange}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sale">For Sale</TabsTrigger>
          <TabsTrigger value="rent">For Rent</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
