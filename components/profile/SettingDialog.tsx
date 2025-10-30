

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@radix-ui/react-label"
import { Camera } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
export function SettingsDialog({ isOpen, setIsOpen, userInfo }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, userInfo: any }) {
    const data = userInfo?.data
    console.log("userInfo", data)
    const [fullName, setFullName] = useState(data?.fullName)
    const [username, setUsername] = useState(data?.username)
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <form>
                <DialogContent className="sm:max-w-[800px]">
                    <DialogHeader>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <DialogTitle>Settings</DialogTitle>
                                <DialogDescription>
                                    Make changes to your settings here. Click save when you&apos;re done.
                                </DialogDescription>
                            </div>
                            {/* Inline profile picture block with upload button */}
                            <div className="flex items-center justify-center gap-2">
                                <input
                                    type="file"
                                    id="profile-picture"
                                    className="hidden"
                                    accept="image/*"
                                />
                                <label
                                    htmlFor="profile-picture"
                                    className="cursor-pointer group relative block w-20 h-20 rounded-full"
                                >
                                    <Image
                                        src={data?.profileImageUrl || "/profile.jpg"}
                                        alt="Profile"
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover w-20 h-20"
                                    />
                                    <span className="absolute bottom-0 right-0 bg-gray-800 p-1 rounded-full">
                                        <Camera className="h-5 w-5 text-white" />
                                    </span>
                                </label>
                            </div>
                        </div>
                    </DialogHeader>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account">Account</TabsTrigger>
                            <TabsTrigger value="password">Password</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between">
                                    <div className="flex items-center">
                                        <CardTitle className="text-xl font-semibold leading-none tracking-tight mr-4">Account</CardTitle>
                                        {data?.authProvider?.toLowerCase() === "google" && (
                                            <span className="flex items-center text-sm text-muted-foreground">
                                                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                                                    <path
                                                        fill="#4285F4"
                                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    />
                                                    <path
                                                        fill="#34A853"
                                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    />
                                                    <path
                                                        fill="#FBBC05"
                                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    />
                                                    <path
                                                        fill="#EA4335"
                                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    />
                                                </svg>
                                                {data?.email}
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>

                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-name">Name</Label>
                                        <Input id="tabs-demo-name" defaultValue={data?.fullName} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-username">Username</Label>
                                        <Input id="tabs-demo-username" defaultValue={data?.username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save changes</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-xl font-semibold leading-none tracking-tight">Password</CardTitle>
                                    <CardDescription>
                                        Change your password here. After saving, you&apos;ll be logged
                                        out.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-current">Current password</Label>
                                        <Input id="tabs-demo-current" type="password" />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="tabs-demo-new">New password</Label>
                                        <Input id="tabs-demo-new" type="password" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button>Save password</Button>
                                </CardFooter>
                            </Card>
                        </TabsContent>
                    </Tabs>

                </DialogContent>
            </form>
        </Dialog>
    )
}
