import React from 'react'

export default function Spinner() {
    return (
        <div id="spinner" class="d-none flex-column justify-content-center align-items-center fullHeight">
            <div class="spinner-border" role="status"></div>
            <span>Loading...</span>
        </div>
    )
}
