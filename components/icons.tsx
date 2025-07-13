// @/components/icons.tsx
import type { SVGProps } from "react"
import { useId } from "react"

export const StarIcon = (props: SVGProps<SVGSVGElement> & { fillPercentage?: number }) => {
  const { fillPercentage = 100, ...rest } = props
  const id = useId()
  const gradientId = `grad-${id}`
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillPercentage}%`} stopColor="currentColor" />
          <stop offset={`${fillPercentage}%`} stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={`url(#${gradientId})`}
        stroke="none"
      />
    </svg>
  )
}

export const BatteryIcon = (props: SVGProps<SVGSVGElement> & { level: number }) => {
  const { level, ...rest } = props // level is 1-4
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className={`h-4 w-2 rounded-sm ${i < level ? "bg-primary" : "bg-gray-300"}`} />
      ))}
    </div>
  )
}
