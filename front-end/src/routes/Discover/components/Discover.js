import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import makeRequest from "../api/makeRequest";
import urls from "../../../urls";

const { url } = urls;
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  componentDidMount = async () => {
    const values = await Promise.allSettled([
      makeRequest(url.newReleases, "albums"),
      makeRequest(url.featuredPlaylists, "playlists"),
      makeRequest(url.categories, "categories"),
    ]);

    const failed_promises = values.filter(
      (value) => value.status === "rejected"
    );

    failed_promises.map((promise) =>
      console.error({
        message: promise.reason.message,
        reason: promise.reason.response.data.error_description,
      })
    );

    const [newReleases, playlists, categories] = values;

    this.setState({ newReleases: newReleases.value || [] });
    this.setState({ playlists: playlists.value || [] });
    this.setState({ categories: categories.value || [] });
  };

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
