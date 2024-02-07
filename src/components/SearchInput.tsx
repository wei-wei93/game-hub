import { Search2Icon } from "@chakra-ui/icons"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) => {
      event.preventDefault(); // prevent the form being posted to the server 
      if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup paddingInline='10px'>
        <InputLeftElement pointerEvents="none">
          <Search2Icon marginLeft='20px' color="gray.400" />
        </InputLeftElement>
        <Input ref={ref} type="text" placeholder="Search..." borderRadius="15px" />
      </InputGroup>
      </form>
  )
}

export default SearchInput