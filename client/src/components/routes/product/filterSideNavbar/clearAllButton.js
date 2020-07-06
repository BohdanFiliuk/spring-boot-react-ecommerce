import React from 'react';
import log from 'loglevel';
import {connect, useDispatch, useSelector} from "react-redux";
import {REMOVE_SELECTED_CATEGORY} from "../../../../actions/types";
import Button from "@material-ui/core/Button";
import {loadProducts} from "../../../../actions";

function ClearAllButton() {
    const dispatch = useDispatch()
    const selectedFilterAttribute = useSelector(state => state.selectedFilterAttributesReducer)

    if((selectedFilterAttribute.genders.length + selectedFilterAttribute.apparels.length
        + selectedFilterAttribute.brands.length + selectedFilterAttribute.prices.length) === 0) {
        log.info(`[ClearAllButton] selected attribute are null`)
        return null
    }

    const handleClearAllClick = () => {
        log.info(`[ClearAllButton] handleClearAllClick(value)`)
        dispatch({type: REMOVE_SELECTED_CATEGORY})
    }

    log.info(`[ClearAllButton] Rendering ClearAllButton Component`)

    return (
        <>
            <Button onClick={handleClearAllClick} style={{fontWeight: "bold"}}
                    color="secondary">CLEAR ALL</Button>
        </>
    );
}

export default connect(null, {loadProducts})(ClearAllButton);