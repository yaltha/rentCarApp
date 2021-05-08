import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

import { styles } from "./styles";

const Rent = () => {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [open, setOpen] = useState(false);

    const onDismissSingle = useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirmSingle = useCallback(
        (params) => {
            setOpen(false);
            setDate(params.date);
        },
        [setOpen, setDate]
    );

    return (
        <View
            style={{
                flex: 1,
                marginTop: 50,
            }}
        >
            <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                Pick Single Date
      </Button>
            <DatePickerModal
                mode="single"
                visible={open}
                date={date}
                onDismiss={onDismissSingle}
                onConfirm={onConfirmSingle}
            />
        </View>
    );
};

export default Rent;
