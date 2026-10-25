// Re-mounted on every navigation, so each page fades in.
// Opacity only: a transform here would offset the fixed sidebar buttons during the animation
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="animate-fade">{children}</div>;
}
