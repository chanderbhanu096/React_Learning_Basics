import "./App.css";

const tahao_peaks = [
  {
    name: "Tahoe Peak",
    elevationGain: 2000,
    status: "open"
  },
  {
    name: "Mt. Rose",
    elevationGain: 3000,
    status: "open"
  },
  {
    name: "Mt. Tallac",
    elevationGain: 4000,
    status: "open"
  }
];

function List({data,renderItem,renderEmpty}){
  return!data.length?(renderEmpty()
  ):(
    <ul>
      {data.map((item)=>(
        <li key = {item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
function App(){
  return (
    <List
      data={tahao_peaks}
      renderEmpty = {<p>there is no peaks</p>}
      renderItem = {(item=><>
        {item.name} - {item.elevationGain} ft.
        </>
    )}
    />

  );
}
export default App;
