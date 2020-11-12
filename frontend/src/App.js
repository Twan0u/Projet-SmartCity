import React from "react";

import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Bubble from "./components/bubble/Bubble";
import List from "./components/list/List";

function App() {
  return (
  <div>
    <Navigation/>

  <br/>

  <div class="container">
    <div class="columns">
      <div class="column is-12">
        <Hero data = {{username : "Antoine"}}/>
        <br/>

        <Bubble/>

        <div class="columns">
          <div class="column is-6">

            <List
                title = "Tâches"
                icon = "fa fa-check"
            />

            <div class="card events-card">
              <header class="card-header">
                <p class="card-header-title">
                  Evenements
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                                    <span class="icon">
                                        <a class="button is-small is-primary" href="#"><i class="fa fa-plus"></i></a>
                                    </span>
                </a>
              </header>
              <div class="card-table">
                <div class="content">
                  <table class="table is-fullwidth is-striped">
                    <tbody>
                    <tr>
                      <td width="5%"><i class="fa fa-calendar"></i></td>
                      <td>12 Octobre : Piscine  </td>
                      <td class="level-right"><a class="button is-small is-info" href="#"><i class="fa fa-chevron-right"></i></a></td>
                    </tr>
                    <tr>
                      <td width="5%"><i class="fa fa-calendar"></i></td>
                      <td>25 Octobre : Interrogation de mathématique</td>
                      <td class="level-right"><a class="button is-small is-info" href="#"><i class="fa fa-chevron-right"></i></a></td>
                    </tr>
                    <tr>
                      <td width="5%"><i class="fa fa-calendar"></i></td>
                      <td>29 Octobre : Interrogation de Français</td>
                      <td class="level-right"><a class="button is-small is-info" href="#"><i class="fa fa-chevron-right"></i></a></td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item">Tout Voir</a>
              </footer>
            </div>

          </div>

          <div class="column is-6">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Recherche d'un(e) élève
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                                  <span class="icon">
                                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="control has-icons-left has-icons-right">
                    <input class="input is-large" type="text" placeholder=""/>
                                        <span class="icon is-medium is-left">
                                          <i class="fa fa-search"></i>
                                        </span>
                      <span class="icon is-medium is-right">
                                          <i class="fa fa-user"></i>
                      </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
