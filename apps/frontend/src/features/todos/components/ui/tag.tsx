const Tag = ({ tag }: { tag: string }) => {
    const TAILWIND_COLORS = [
        {
            background: "bg-emerald-600/50",
            border: "border-emerald-200",
            text: "text-emerald-900",
        },
        {
            background: "bg-yellow-600/50",
            border: "border-yellow-200",
            text: "text-yellow-900",
        },
        {
            background: "bg-pink-600/50",
            border: "border-pink-200",
            text: "text-pink-900",
        },
        {
            background: "bg-purple-600/50",
            border: "border-purple-200",
            text: "text-purple-900",
        },
        {
            background: "bg-teal-600/50",
            border: "border-teal-200",
            text: "text-teal-900",
        },
    ]
    const css = TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)];
    
    return (
        <li className={`${css.background} ${css.border} border-2 px-2 rounded-lg`}>
            {tag}
        </li>  
    )
}

export { Tag };