import { ResourceCard } from "@/components/ui/card";
import { SidebarMenu } from "@/components/ui/sidebar";
import { getCardData } from "@/utils/constants";
import { anki, dict, grammar, vocabulary } from "@/utils/constants";

export default function BeginnersPage() {

    return (
        <div className="flex flex-row gap-8 ">
            <SidebarMenu items={getCardData()} />
            <div className="flex flex-col mt-10 lg:mt-20 items-center border-0">
                <h1 className="text-center text-4xl font-bold">Beginner Essentials</h1>
                <p className="mt-4 px-4 text-center max-w-6xl">
                    Welcome to the Beginner Essentials section! Here you'll find a curated selection of resources and tools specifically designed to help you kickstart your Japanese learning journey.
                </p>
                        <hr className=" w-full mt-10 opacity-10" />
                <div className="flex flex-col md:flex-row md:gap-4 mt-10 mb-20">
                    <div className="md:column">
                        <h1 className="font-semibold text-3xl">Dictionaries</h1>
                        <ResourceCard array={dict} className="mt-2 !gap-2" />
                        <h1 className="font-semibold text-3xl">Vocabulary</h1>
                        <ResourceCard array={vocabulary} className="mt-2 !gap-2" />
                    </div>
                    <div className="md:column">
                        <h1 className="font-semibold text-3xl">Grammar</h1>
                        <ResourceCard array={grammar} className="mt-2 !gap-2" />
                        <h1 className="font-semibold text-3xl">Anki Cards</h1>
                        <ResourceCard array={anki} className="mt-2 !gap-2" />
                    </div>
                </div>
            </div>

        </div>
    );
}