import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Nat32 "mo:core/Nat32";
import Runtime "mo:core/Runtime";

actor {
  // URL Shortener persistent store
  let urlMappings = Map.empty<Text, Text>();
  let urlIdState = Map.empty<Text, Nat>();

  // The function to generate shortUrl cannot be called as redirect cannot be achieved from backend, this should be a simple UI that takes urls instead on frontend.
  public shared ({ caller }) func generateShortUrl(originalUrl : Text) : async Text {
    let uid = "id_" # urlIdState.size().toText();

    let existing = urlMappings.get(uid);
    switch (existing) {
      case (?_) { Runtime.trap("UID to URL [" # uid # "] already exists. Something went wrong. ") };
      case (null) {
        let newStore = Map.singleton(uid, originalUrl);
        urlMappings.add(uid, originalUrl); // add original url to persistent store
        urlIdState.add(uid, 1);
      };
    };
    uid;
  };

  public shared ({ caller }) func processRedirect(uid : Text) : async Text {
    switch (urlMappings.get(uid)) {
      case (null) { Runtime.trap("Uid [" # uid # "] could not be found. ") };
      case (?url) { url };
    };
  };
};
