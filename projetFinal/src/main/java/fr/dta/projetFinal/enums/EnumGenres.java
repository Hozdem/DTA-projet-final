package fr.dta.projetFinal.enums;

import java.util.ArrayList;
import java.util.List;

public enum EnumGenres
{
	COMBAT("COMBAT"),
	PLATEFORME("PLATEFORME"),
	FPS("FPS"),
	SHOOTTHEMUP("SHOOTTHEMUP"),
	RAILSHOOTER("RAILSHOOTER"),
	TPS("TPS"),
	ADVENTURE("ADVENTURE"),
	SIMULATEUR("SIMULATEUR"),
	ACTION("ACTION"),
	INFILTRATION("INFILTRATION"),
	SURVIVALHORROR("SURVIVALHORROR"),
	ACTIONRPG("ACTIONRPG"),
	HACKNSLASH("HACKNSLASH"),
	ROGUELIKE("ROGUELIKE"),
	MMORPG("MMORPG"),
	TACTICALRPG("TACTICALRPG"),
	JRPG("JRPG"),
	SHOOTER("SHOOTER"),
	RPG("RPG"),
	PUZZLE("PUZZLE"),
	LABYRINTHE("LABYRINTHE"),
	GESTION("GESTION"),
	TURNBASEDSTRATEGY("TURNBASEDSTRATEGY"),
	REALTIMESTRATEGY("REALTIMESTRATEGY"),
	_4X("4X"),
	WARGAME("WARGAME"),
	SPORT("SPORT"),
	RACING("RACING"),
	OPENWORLD("OPENWORLD"),
	RHYTHM("RHYTHM");

	private String genre;
	
	private EnumGenres(String s)
	{
		this.genre = s;
	}

	public String getGenre()
	{
		return this.genre.toString();
	}

	public void setGenre(String genre)
	{
		this.genre = genre;
	}

	public static List<String> getAllGenres()
	{
		List<String> list = new ArrayList<String>();
		for(EnumGenres genre: EnumGenres.values()) {
			list.add(genre.getGenre());
		}
		return list;
	}
}