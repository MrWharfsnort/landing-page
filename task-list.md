* [x] _PHASE 0_
* ### PROJECT OBJECTIVES
   * TEAM
     * Project purpose;
     * Features list;

  .

  .


* [x] _PHASE 1_
* ### PROJECT SETUP
   * FRONT
     * Tech stack to use
     * Bootstrap/boilerplate/full custom/ ..
     * App specific ( pwa, high accessibility, high backwards compatibility, ....)
   * BACK
     * Tech stack to use
     * Setting up 'home' route
   * BOTH
     * Connect front to end ( same prj/ different servers [ CORS, whitelist, ...])

  .

  .

 * [ ] _PHASE 2 (project specific)_
 * ### AUTH LAYER
   * FRONT
     * form component(s) (data validation, component isolation as much as possible [redux wireup? csstransition? ..] );
     * Landing integration ( navlinks, front routing );
     * Oauth?
   * BACK
     * user auth route ( JWT/cookies, data sanitization, ... );
     * db user model;
   * BOTH
     * user structure;
     * auth method ( Oauth, JWT, cookies, ...);

 * ### PROFILE
   * FRONT
     * Profile component(s) ( avatar / gravatar, edit, statusbar - actual team, actual project, project done ... every stuff not only user related but user-inside-this-context related (not possible to know at register time);
     * Landing integration ( navlinks, front routing );
   * BACK
     * Route creaction to collect profile info ( maybe from id query db searching in team collection for id team, in project collection for id projects etc...;
   * BOTH
     * profile structure;

 * ### VOTING
   *  FRONT
      * Survey creation ( all, team-leader only,... - Tech used [is react enough? Wanna mess up with d3? ..] );
      * Survey votation mode ( public/private, wait for all / date threshold, quorum, ...);
      * Integration ( popup advice with survey detail in profile,survey section storing everything,  appearance only of active survey,...;
   * BACK
     * db survey route ( integration with user / profile to trace vote? ...)
     * db survey model;

   * BOTH
     * survey structure;

 * ### WAITING LIST
   *  FRONT
      * Public /private section, visible to all/some, ...
   * BACK
     * db section ( needed? )

 * ### LANDING PAGE
   * FRONT
     * Landing type ( Hero, minimal,  detailed, ...);
     * Routing ( custom / react router );
     * ...
