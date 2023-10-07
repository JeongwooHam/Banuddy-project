export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="font-display">
      <div>header</div>
      {children}
      <div>footer</div>
    </div>
  )
}
