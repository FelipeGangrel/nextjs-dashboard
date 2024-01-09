import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <h4 className="text-2xl font-semibold">Card Title</h4>
        </CardHeader>
        <CardContent>
          <Button variant="secondary">Oi</Button>
        </CardContent>
      </Card>
    </main>
  )
}
