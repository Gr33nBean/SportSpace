import { Timer } from "lucide-react";
import FilterSelect from "./FilterSelect";

const DurationSelect = ({ control }: any) => {
    const durations = [
      { name: 'duration.30m', label: '30 phút' },
      { name: 'duration.1h', label: '1 tiếng' },
      { name: 'duration.1h30m', label: '1 tiếng 30 phút' },
      { name: 'duration.2h', label: '2 tiếng' },
    ];
  
    return (
        <FilterSelect data={durations} title="Thời gian" icon={
          <Timer size={20}/>
        } control={control}/>
    );
  };

export default DurationSelect