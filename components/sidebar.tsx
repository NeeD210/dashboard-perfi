import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  import Link from "next/link";
  import { Folder, HouseIcon, CreditCard, User, Wallet, Settings } from "lucide-react";

const Sidebar = () => {
    return (
        <div>
            <Command className="bg-secondary h-[92vh] rounded-none">
                <CommandInput placeholder="Search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Pages">
                        <CommandItem>
                            <Link href="/" className="flex items-center">
                                <HouseIcon className="w-4 h-4 mr-2" />
                                <span>Inicio</span>
                            </Link>
                        </CommandItem>
                        <CommandItem>
                            <Link href="/posts" className="flex items-center">
                                <CreditCard className="w-4 h-4 mr-2" />
                                <span>Pagos</span>
                            </Link>
                        </CommandItem>
                        <CommandItem>
                            <Link href="/links" className="flex items-center">
                                <Folder className="w-4 h-4 mr-2" />
                                <span>Categorias</span>
                            </Link>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Configuracion">
                        <CommandItem>
                            <User className="w-4 h-4 mr-2" />
                            Perfil
                        </CommandItem>
                        <CommandItem>
                            <Wallet className="w-4 h-4 mr-2" />
                            Suscripcion
                        </CommandItem>
                        <CommandItem>
                            <Settings className="w-4 h-4 mr-2" />
                            Configuracion
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>

        </div>
    );
}
 
export default Sidebar;