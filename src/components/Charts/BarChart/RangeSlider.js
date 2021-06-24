import React from "react";
import { Grid } from "@material-ui/core";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { MuiRail, MuiHandle, MuiTrack, MuiTick } from "./components";
import BarChart from "./BarChart";

class RangeSlider extends React.Component {
  constructor(props) {
    super(props);

    const sortedData = props.data.prices.slice().sort((a, b) => a - b);
    const range = [sortedData[0], sortedData[sortedData.length - 1]];

    this.state = {
      domain: range,
      update: range,
      values: range,
      inputValues: range,
    };
  }

  render() {
    const { domain, values, update, inputValues } = this.state;

    // style={{ margin: "10%", height: 120, width: "80%" }}
    return (
      <Grid container>
        <Grid item xs={12}>
          <div>
            <BarChart
              labels={this.props.data.lables}
              data={this.props.data.prices}
              highlight={update}
              domain={domain}
              title={this.props.data.title}
            />
            <Slider
              mode={3}
              step={1}
              domain={domain}
              rootStyle={{
                position: "relative",
                width: "100%",
              }}
              onUpdate={(update) =>
                this.setState({ update, inputValues: update })
              }
              onChange={(values) => this.setState({ values })}
              values={values}
            >
              <Rail>
                {({ getRailProps }) => <MuiRail getRailProps={getRailProps} />}
              </Rail>
              <Handles>
                {({ handles, getHandleProps }) => (
                  <div className="slider-handles">
                    {handles.map((handle) => (
                      <MuiHandle
                        key={handle.id}
                        handle={handle}
                        domain={domain}
                        getHandleProps={getHandleProps}
                      />
                    ))}
                  </div>
                )}
              </Handles>
              <Tracks left={false} right={false}>
                {({ tracks, getTrackProps }) => (
                  <div className="slider-tracks">
                    {tracks.map(({ id, source, target }) => (
                      <MuiTrack
                        key={id}
                        source={source}
                        target={target}
                        getTrackProps={getTrackProps}
                      />
                    ))}
                  </div>
                )}
              </Tracks>
              <Ticks count={9}>
                {({ ticks }) => (
                  <div className="slider-ticks" style={{ color: "white" }}>
                    {ticks.map((tick) => (
                      <MuiTick
                        style={{ color: "white" }}
                        key={tick.id}
                        tick={tick}
                        count={ticks.length}
                      />
                    ))}
                  </div>
                )}
              </Ticks>
            </Slider>
            <Grid
              container
              alignItems="center"
              justify="space-around"
              style={{ marginTop: "88px" }}
            ></Grid>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default RangeSlider;
