"use client"

import { useEffect } from "react"
import { LiffProvider, useLiff } from "./liff/liff-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

const HomeContent = () => {
  const { liff, liffError, userId, isLoggedIn, login, logout } = useLiff()

  useEffect(() => {
    if (liff && isLoggedIn) {
      console.log("User is logged in")
    }
  }, [liff, isLoggedIn])

  if (liffError) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>LIFF init failed</AlertTitle>
        <AlertDescription>{liffError}</AlertDescription>
      </Alert>
    )
  }

  if (!liff) {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Loading LIFF...</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px] mt-2" />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>LIFF APP</CardTitle>
        <CardDescription>LIFF init succeeded.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-sm text-muted-foreground">LIFF ID: {liff.id}</p>
        {isLoggedIn && <p className="text-sm text-muted-foreground mt-2">User ID: {userId}</p>}
      </CardContent>
      <CardFooter className="flex justify-center">
        {isLoggedIn ? (
          <Button onClick={logout} variant="outline">
        Logout
          </Button>
        ) : (
          <Button onClick={login} variant="outline">Login</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <LiffProvider>
      <div className="flex items-center justify-center min-h-screen bg-background">
        <HomeContent />
      </div>
    </LiffProvider>
  )
}
