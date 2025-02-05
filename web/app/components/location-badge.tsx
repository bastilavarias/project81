interface LocationBadgeProps {
    name: string
    verified?: boolean
}

export function LocationBadge({ name, verified = false }: LocationBadgeProps) {
    return (
        <span className="inline-flex items-center gap-1">
      {name}
            {verified && <span className="h-2 w-2 rounded-full bg-blue-500" />}
    </span>
    )
}

