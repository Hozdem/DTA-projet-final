package fr.dta.projetFinal.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumGenres
{
	GENRE_COMBAT("GENRE_COMBAT"),
	GENRE_PLATEFORME("GENRE_PLATEFORME"),
	GENRE_FPS("GENRE_FPS"),
	GENRE_SHOOTTHEMUP("GENRE_SHOOTTHEMUP"),
	GENRE_RAILSHOOTER("GENRE_RAILSHOOTER"),
	GENRE_TPS("GENRE_TPS"),
	GENRE_ADVENTURE("GENRE_ADVENTURE"),
	GENRE_SIMULATEUR("GENRE_SIMULATEUR"),
	GENRE_ACTION("GENRE_ACTION"),
	GENRE_INFILTRATION("GENRE_INFILTRATION"),
	GENRE_SURVIVALHORROR("GENRE_SURVIVALHORROR"),
	GENRE_ACTIONRPG("GENRE_ACTIONRPG"),
	GENRE_HACKNSLASH("GENRE_HACKNSLASH"),
	GENRE_ROGUELIKE("GENRE_ROGUELIKE"),
	GENRE_MMORPG("GENRE_MMORPG"),
	GENRE_TACTICALRPG("GENRE_TACTICALRPG"),
	GENRE_JRPG("GENRE_JRPG"),
	GENRE_PUZZLE("GENRE_PUZZLE"),
	GENRE_LABYRINTHE("GENRE_LABYRINTHE"),
	GENRE_GESTION("GENRE_GESTION"),
	GENRE_TURNBASEDSTRATEGY("GENRE_TURNBASEDSTRATEGY"),
	GENRE_REALTIMESTRATEGY("GENRE_REALTIMESTRATEGY"),
	GENRE_4X("GENRE_4X"),
	GENRE_WARGAME("GENRE_WARGAME"),
	GENRE_SPORT("GENRE_SPORT"),
	GENRE_RACING("GENRE_RACING"),
	GENRE_RHYTHM("GENRE_RHYTHM");

	private String genre;
	private List<String> genres;
	
	private EnumGenres(String s)
	{
		this.genre = s;
		this.genres.add(s);
	}

	public String getGenre()
	{
		return this.genre;
	}

	public void setGenre(String genre)
	{
		this.genre = genre;
	}

	public List<String> getAllGenres()
	{
		List<String> liste = new ArrayList<String>();

		liste.add(GENRE_RHYTHM.toString());
		liste.add(GENRE_RACING.toString());
		liste.add(GENRE_SPORT.toString());
		liste.add(GENRE_WARGAME.toString());
		liste.add(GENRE_4X.toString());
		liste.add(GENRE_REALTIMESTRATEGY.toString());
		liste.add(GENRE_TURNBASEDSTRATEGY.toString());
		liste.add(GENRE_LABYRINTHE.toString());
		liste.add(GENRE_PUZZLE.toString());
		liste.add(GENRE_JRPG.toString());
		liste.add(GENRE_TACTICALRPG.toString());
		liste.add(GENRE_MMORPG.toString());
		liste.add(GENRE_ROGUELIKE.toString());
		liste.add(GENRE_HACKNSLASH.toString());
		liste.add(GENRE_ACTIONRPG.toString());
		liste.add(GENRE_SURVIVALHORROR.toString());
		liste.add(GENRE_INFILTRATION.toString());
		liste.add(GENRE_ACTION.toString());
		liste.add(GENRE_SIMULATEUR.toString());
		liste.add(GENRE_ADVENTURE.toString());
		liste.add(GENRE_TPS.toString());
		liste.add(GENRE_RAILSHOOTER.toString());
		liste.add(GENRE_SHOOTTHEMUP.toString());
		liste.add(GENRE_FPS.toString());
		liste.add(GENRE_PLATEFORME.toString());
		liste.add(GENRE_COMBAT.toString());
		
		return liste;
	}
}