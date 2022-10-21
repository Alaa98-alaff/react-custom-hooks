import useLocalStorage from "../../customHooks/useLocalStorage";
import useUpdateLogger from "../../customHooks/useUpdateLogger";

function InputLocalStorage() {
  //   const [name, setName] = useState();
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default InputLocalStorage;
