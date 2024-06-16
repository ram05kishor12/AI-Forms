"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { link } from "fs";

export default function Form() {
    const [open, setOpen] = useState(false);
    const onformCreate = () => {
        setOpen(true);
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button onClick={onformCreate}> Create Form</Button>
                </DialogTrigger>
                <DialogContent className="sm: max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Create New Form</DialogTitle>
                        <DialogDescription>Build your form with AI easily</DialogDescription>
                    </DialogHeader>
                    <form>
                        <div className="grid gap-4 py-4">
                            <Textarea id="despcription" name="description" required placeholder="Share what your form about provide more informations to collect then see the magic with AI" />
                            <Button variant="outline" >Create Now</Button>
                        </div>
                    </form>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}