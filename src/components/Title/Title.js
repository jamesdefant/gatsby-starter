import React from "react"
import PropTypes from "prop-types"

const Title = ({ label }) => {

  return (
    <h1>
      { label }
    </h1>
  )
}

Title.propTypes = {
  label: PropTypes.string.isRequired
}

export default Title