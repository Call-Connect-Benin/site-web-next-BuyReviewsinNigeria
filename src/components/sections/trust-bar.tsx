import { trustBarItems } from "@/data/homepage";
import { iconMap } from "@/components/icons";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {trustBarItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm font-medium text-text-secondary"
              >
                <Icon className="h-5 w-5 text-google-blue" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
