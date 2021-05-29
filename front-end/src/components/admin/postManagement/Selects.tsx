import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import { Category } from "types/model";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
    backgroundColor: "#FFF",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: any, personName: any, theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type Props = {
  data: Category[];
  onChangeData: (value: [number]) => void;
  categorySelected: number[];
};

export default function MultipleSelect({
  data,
  onChangeData,
  categorySelected,
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedData, setSelectedData] = React.useState<any>([]);

  useEffect(() => {
    if (selectedData) {
      onChangeData(selectedData);
    }
  }, [selectedData]);

  useEffect(() => {
    if (categorySelected.length > 0) {
      setSelectedData(categorySelected);
    }
  }, [categorySelected]);

  const handleChange = (event: any) => {
    setSelectedData(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel
        id="demo-mutiple-chip-label"
        style={{ marginLeft: 8, fontSize: 14, marginTop: 0 }}
      >
        Category
      </InputLabel>
      <Select
        labelId="demo-mutiple-chip-label"
        id="demo-mutiple-chip"
        multiple
        value={selectedData}
        onChange={handleChange}
        input={<Input id="select-multiple-chip" />}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {selected.map((value: any) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
      >
        {data.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
            style={getStyles(item.title, selectedData, theme)}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
