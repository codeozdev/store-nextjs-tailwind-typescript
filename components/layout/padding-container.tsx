export default function PaddingContainer({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className='w-full max-w-7xl mx-auto px-8'>{children}</div>
}
