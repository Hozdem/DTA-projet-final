package fr.dta.projetFinal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Hello world!
 *
 */

@SpringBootApplication(scanBasePackages = { "fr.dta" }) 
@EntityScan(basePackages="fr.dta") 
@EnableJpaRepositories(basePackages="fr.dta") 
@EnableJpaAuditing
public class App 
{
    public static void main( String[] args )
    {
    	SpringApplication.run(App.class, args);
        System.out.println( "Hello World!" );
    }
}
